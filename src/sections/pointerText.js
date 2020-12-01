import React, { useState, useEffect } from 'react';
import {
  redux
} from '../component';
import Onwer from '../../database/owner';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (ev) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

function FromTo(props) {
  const { from, to, arrayTransfer } = props;
  return (
    <div>
      {
          arrayTransfer.length > 0 ? (
            <div style={{ fontSize: '0.95em' }}>
              <div
                style={{
                  margin: '0px',
                  marginBottom: '0px',
                  marginTop: '8px'
                }}
              >
                <span>From:</span>
                &nbsp;
                <span style={{ color: '#e5097f' }}>{from}</span>
                <br />
                <span>To:</span>
                &nbsp;
                <span style={{ color: '#e5097f' }}>{to}</span>
              </div>
              {
                arrayTransfer.map((val, i) => (
                  <div key={`${i + 1}`}>
                    <span
                      style={{
                        color: 'grey'
                      }}
                    >
                      {`⬩ Manuscrit N°: ${val.anderson_id} → Année: ${val.date}`}
                    </span>
                  </div>
                ))
              }
            </div>
          ) : null
        }
    </div>
  );
}

export default function PointerText(props) {
  const { x, y } = useMousePosition();
  const [stateRedux, dispatch] = redux();

  if (stateRedux.hoverArrow.visible === true) {
    const { transfert } = stateRedux.hoverArrow;
    const transfert1to2 = transfert.filter((val) => val.inverse);
    const transfert2to1 = transfert.filter((val) => !val.inverse);
    const name1 = stateRedux.hoverArrow.libraries[1].type === 'library' ? stateRedux.hoverArrow.libraries[1].name : 'Group libraries';
    const name2 = stateRedux.hoverArrow.libraries[2].type === 'library' ? stateRedux.hoverArrow.libraries[2].name : 'Group libraries';

    // console.log('transfert', transfert);

    return (
      <div style={{
        position: 'absolute',
        top: y - 25,
        left: x + 25,
        zIndex: 99,
        background: '#fbf8f3',
        color: '#be61ff',
        padding: '0.2vw'
      }}
      >
        <h4
          style={{
            margin: '0px',
            marginBottom: '8px',
            marginTop: '1px',
            color: 'grey'
          }}
        >
          {`${transfert.length} Transfer of manuscript${stateRedux.hoverArrow.transfert.length > 1 ? 's' : ''}`}
        </h4>

        <FromTo
          from={name1}
          to={name2}
          arrayTransfer={transfert1to2}
        />

        <FromTo
          from={name2}
          to={name1}
          arrayTransfer={transfert2to1}
        />
      </div>
    );
  }

  return (null);
}
