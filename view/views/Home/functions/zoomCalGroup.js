export default function zoomCalGroup(zoom) {
  switch (zoom) {
    case 20: return 0;
    case 19: return 0;
    case 18: return 0;
    case 17: return 50;
    case 16: return 100;
    case 15: return 200;
    case 14: return 400;
    case 13: return 800;
    case 12: return 1600;
    case 11: return 3200;
    case 10: return 6400;
    case 9: return 9000;
    case 8: return 12000;
    case 7: return 32000;
    case 6: return 46000;
    case 5: return 140000;
    case 4: return 240000;
    case 3: return 440000;
    case 2: return 960000;
    default: return 0;
  }
}
