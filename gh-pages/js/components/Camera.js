import {Entity} from 'aframe-react';
import React from 'react';
import Cursor from './Cursor';
import Navigation from './navigation/Navigation';

export default class Camera extends React.Component {

  // CV stands for Camera View

  // CV_initial = {x:5, y:13, z:-70}; this is the originial

  head_height_0 = 13;
  head_height_1 = 14;
  head_height_2 = 16;
  head_height_3 = 18;
  head_height_4 = 20;
  head_height_5 = 22;
  head_height_6 = 24;
  head_height_7 = 26;
  head_height_8 = 28;
  head_height_9 = 30;

  // Rows, Z axis

  row_1 = -130;
  row_2 = -118;
  row_3 = -106;
  row_4 = -94;
  row_5 = -82;
  row_6 = -68;
  row_7 = -56;
  row_8 = -35;
  row_9 = -23;
  row_10 = -12;
  row_11 = -1;
  row_12 = 10;
  row_13 = 21;
  row_14 = 32;
  row_15 = 43;
  row_16 = 54;
  row_17 = 65;

  //Columns X axis

  // SO = Seat Odd (seat in an odd number row)

  SO_1 = -2.4;
  SO_2 = 2.5;
  SO_3 = -7.3;
  SO_4 = 7.4;
  SO_5 = -12.2;
  SO_6 = 12.2;
  SO_7 = -17.1;
  SO_8 = 17.1;
  SO_9 = -22;
  SO_10 = 22;
  SO_11 = -26.8;
  SO_12 = 26.8;
  SO_13 = -31.7;
  SO_14 = 31.7;
  SO_15 = -36.5;
  SO_16 = 36.5;
  SO_17 = -41.4;
  SO_18 = 41.4;

  // SE = Seat Even (seats in an even number row)

  SE_1 = 0;
  SE_2 = 4.8;
  SE_3 = -5;
  SE_4 = 9.5;
  SE_5 = -9.5;
  SE_6 = 14.6;
  SE_7 = -14.6;
  SE_8 = 19.3;
  SE_9 = -19.3;
  SE_10 = 26.8;
  SE_11 = -26.8;
  SE_12 = 31.7;
  SE_13 = -31.7;
  SE_14 = 36.5;
  SE_15 = -36.5;
  SE_16 = 41.4;
  SE_17 = -41.4;

  //SB = Seat Back (Seats in the back)

  SB_1 = -9.6;
  SB_2 = 9.6;
  SB_3 = -14.5;
  SB_4 = 14.5;
  SB_5 = -19.4;
  SB_6 = 19.4;
  SB_7 = -24.3;
  SB_8 = 24.3;
  SB_9 = -29.2;
  SB_10 = 29.2;
  SB_11 = -33.9;
  SB_12 = 33.9;
  SB_13 = -38.8;
  SB_14 = 38.8;
  SB_15 = -43.7;
  SB_16 = 43.7;
  SB_17 = -48.6;
  SB_18 = 48.6;
  SB_19 = -53.5;
  SB_20 = 53.5;

  seatCoordinates = {

    CV_change_seat: {x: 0, y:38, z:-125},
    CV_intro: {x: 0, y:10, z:64},
    CV_intro_2: {x: 0, y:25, z:0},

    S1_1:  {x: this.SO_1, y: this.head_height_0, z: this.row_1},
    S1_2:  {x: this.SO_2, y: this.head_height_0, z: this.row_1},
    S1_3:  {x: this.SO_3, y: this.head_height_0, z: this.row_1},
    S1_4:  {x: this.SO_4, y: this.head_height_0, z: this.row_1},
    S1_5:  {x: this.SO_5, y: this.head_height_0, z: this.row_1},
    S1_6:  {x: this.SO_6, y: this.head_height_0, z: this.row_1},
    S1_7:  {x: this.SO_7, y: this.head_height_0, z: this.row_1},
    S1_8:  {x: this.SO_8, y: this.head_height_0, z: this.row_1},
    S1_9:  {x: this.SO_9, y: this.head_height_0, z: this.row_1},
    S1_10:  {x: this.SO_10, y: this.head_height_0, z: this.row_1},
    S1_11:  {x: this.SO_11, y: this.head_height_0, z: this.row_1},
    S1_12:  {x: this.SO_12, y: this.head_height_0, z: this.row_1},
    S1_13:  {x: this.SO_13, y: this.head_height_0, z: this.row_1},
    S1_14:  {x: this.SO_14, y: this.head_height_0, z: this.row_1},
    S1_15:  {x: this.SO_15, y: this.head_height_0, z: this.row_1},
    S1_16:  {x: this.SO_16, y: this.head_height_0, z: this.row_1},
    S1_17:  {x: this.SO_17, y: this.head_height_0, z: this.row_1},
    S1_18:  {x: this.SO_18, y: this.head_height_0, z: this.row_1},
    S2_1:  {x: this.SE_1, y: this.head_height_0, z: this.row_2},
    S2_2:  {x: this.SE_2, y: this.head_height_0, z: this.row_2},
    S2_3:  {x: this.SE_3, y: this.head_height_0, z: this.row_2},
    S2_4:  {x: this.SE_4, y: this.head_height_0, z: this.row_2},
    S2_5:  {x: this.SE_5, y: this.head_height_0, z: this.row_2},
    S2_6:  {x: this.SE_6, y: this.head_height_0, z: this.row_2},
    S2_7:  {x: this.SE_7, y: this.head_height_0, z: this.row_2},
    S2_8:  {x: this.SE_8, y: this.head_height_0, z: this.row_2},
    S2_9:  {x: this.SE_9, y: this.head_height_0, z: this.row_2},
    S2_10:  {x: this.SE_10, y: this.head_height_0, z: this.row_2},
    S2_11:  {x: this.SE_11, y: this.head_height_0, z: this.row_2},
    S2_12:  {x: this.SE_12, y: this.head_height_0, z: this.row_2},
    S2_13:  {x: this.SE_13, y: this.head_height_0, z: this.row_2},
    S2_14:  {x: this.SE_14, y: this.head_height_0, z: this.row_2},
    S2_15:  {x: this.SE_15, y: this.head_height_0, z: this.row_2},
    S2_16:  {x: this.SE_16, y: this.head_height_0, z: this.row_2},
    S2_17:  {x: this.SE_17, y: this.head_height_0, z: this.row_2},
    S3_1:  {x: this.SO_1, y: this.head_height_0, z: this.row_3},
    S3_2:  {x: this.SO_2, y: this.head_height_0, z: this.row_3},
    S3_3:  {x: this.SO_3, y: this.head_height_0, z: this.row_3},
    S3_4:  {x: this.SO_4, y: this.head_height_0, z: this.row_3},
    S3_5:  {x: this.SO_5, y: this.head_height_0, z: this.row_3},
    S3_6:  {x: this.SO_6, y: this.head_height_0, z: this.row_3},
    S3_7:  {x: this.SO_7, y: this.head_height_0, z: this.row_3},
    S3_8:  {x: this.SO_8, y: this.head_height_0, z: this.row_3},
    S3_9:  {x: this.SO_9, y: this.head_height_0, z: this.row_3},
    S3_10:  {x: this.SO_10, y: this.head_height_0, z: this.row_3},
    S3_11:  {x: this.SO_11, y: this.head_height_0, z: this.row_3},
    S3_12:  {x: this.SO_12, y: this.head_height_0, z: this.row_3},
    S3_13:  {x: this.SO_13, y: this.head_height_0, z: this.row_3},
    S3_14:  {x: this.SO_14, y: this.head_height_0, z: this.row_3},
    S3_15:  {x: this.SO_15, y: this.head_height_0, z: this.row_3},
    S3_16:  {x: this.SO_16, y: this.head_height_0, z: this.row_3},
    S3_17:  {x: this.SO_17, y: this.head_height_0, z: this.row_3},
    S3_18:  {x: this.SO_18, y: this.head_height_0, z: this.row_3},
    S4_1:  {x: this.SE_1, y: this.head_height_0, z: this.row_4},
    S4_2:  {x: this.SE_2, y: this.head_height_0, z: this.row_4},
    S4_3:  {x: this.SE_3, y: this.head_height_0, z: this.row_4},
    S4_4:  {x: this.SE_4, y: this.head_height_0, z: this.row_4},
    S4_5:  {x: this.SE_5, y: this.head_height_0, z: this.row_4},
    S4_6:  {x: this.SE_6, y: this.head_height_0, z: this.row_4},
    S4_7:  {x: this.SE_7, y: this.head_height_0, z: this.row_4},
    S4_8:  {x: this.SE_8, y: this.head_height_0, z: this.row_4},
    S4_9:  {x: this.SE_9, y: this.head_height_0, z: this.row_4},
    S4_10:  {x: this.SE_10, y: this.head_height_0, z: this.row_4},
    S4_11:  {x: this.SE_11, y: this.head_height_0, z: this.row_4},
    S4_12:  {x: this.SE_12, y: this.head_height_0, z: this.row_4},
    S4_13:  {x: this.SE_13, y: this.head_height_0, z: this.row_4},
    S4_14:  {x: this.SE_14, y: this.head_height_0, z: this.row_4},
    S4_15:  {x: this.SE_15, y: this.head_height_0, z: this.row_4},
    S4_16:  {x: this.SE_16, y: this.head_height_0, z: this.row_4},
    S4_17:  {x: this.SE_17, y: this.head_height_0, z: this.row_4},
    S5_1:  {x: this.SO_1, y: this.head_height_0, z: this.row_5},
    S5_2:  {x: this.SO_2, y: this.head_height_0, z: this.row_5},
    S5_3:  {x: this.SO_3, y: this.head_height_0, z: this.row_5},
    S5_4:  {x: this.SO_4, y: this.head_height_0, z: this.row_5},
    S5_5:  {x: this.SO_5, y: this.head_height_0, z: this.row_5},
    S5_6:  {x: this.SO_6, y: this.head_height_0, z: this.row_5},
    S5_7:  {x: this.SO_7, y: this.head_height_0, z: this.row_5},
    S5_8:  {x: this.SO_8, y: this.head_height_0, z: this.row_5},
    S5_9:  {x: this.SO_9, y: this.head_height_0, z: this.row_5},
    S5_10:  {x: this.SO_10, y: this.head_height_0, z: this.row_5},
    S5_11:  {x: this.SO_11, y: this.head_height_0, z: this.row_5},
    S5_12:  {x: this.SO_12, y: this.head_height_0, z: this.row_5},
    S5_13:  {x: this.SO_13, y: this.head_height_0, z: this.row_5},
    S5_14:  {x: this.SO_14, y: this.head_height_0, z: this.row_5},
    S5_15:  {x: this.SO_15, y: this.head_height_0, z: this.row_5},
    S5_16:  {x: this.SO_16, y: this.head_height_0, z: this.row_5},
    S5_17:  {x: this.SO_17, y: this.head_height_0, z: this.row_5},
    S5_18:  {x: this.SO_18, y: this.head_height_0, z: this.row_5},
    S6_1:  {x: this.SE_1, y: this.head_height_0, z: this.row_6},
    S6_2:  {x: this.SE_2, y: this.head_height_0, z: this.row_6},
    S6_3:  {x: this.SE_3, y: this.head_height_0, z: this.row_6},
    S6_4:  {x: this.SE_4, y: this.head_height_0, z: this.row_6},
    S6_5:  {x: this.SE_5, y: this.head_height_0, z: this.row_6},
    S6_6:  {x: this.SE_6, y: this.head_height_0, z: this.row_6},
    S6_7:  {x: this.SE_7, y: this.head_height_0, z: this.row_6},
    S6_8:  {x: this.SE_8, y: this.head_height_0, z: this.row_6},
    S6_9:  {x: this.SE_9, y: this.head_height_0, z: this.row_6},
    S6_10:  {x: this.SE_10, y: this.head_height_0, z: this.row_6},
    S6_11:  {x: this.SE_11, y: this.head_height_0, z: this.row_6},
    S6_12:  {x: this.SE_12, y: this.head_height_0, z: this.row_6},
    S6_13:  {x: this.SE_13, y: this.head_height_0, z: this.row_6},
    S6_14:  {x: this.SE_14, y: this.head_height_0, z: this.row_6},
    S6_15:  {x: this.SE_15, y: this.head_height_0, z: this.row_6},
    S6_16:  {x: this.SE_16, y: this.head_height_0, z: this.row_6},
    S6_17:  {x: this.SE_17, y: this.head_height_0, z: this.row_6},
    S7_1:  {x: this.SO_1, y: this.head_height_0, z: this.row_7},
    S7_2:  {x: this.SO_2, y: this.head_height_0, z: this.row_7},
    S7_3:  {x: this.SO_3, y: this.head_height_0, z: this.row_7},
    S7_4:  {x: this.SO_4, y: this.head_height_0, z: this.row_7},
    S7_5:  {x: this.SO_5, y: this.head_height_0, z: this.row_7},
    S7_6:  {x: this.SO_6, y: this.head_height_0, z: this.row_7},
    S7_7:  {x: this.SO_7, y: this.head_height_0, z: this.row_7},
    S7_8:  {x: this.SO_8, y: this.head_height_0, z: this.row_7},
    S7_9:  {x: this.SO_9, y: this.head_height_0, z: this.row_7},
    S7_10:  {x: this.SO_10, y: this.head_height_0, z: this.row_7},
    S7_11:  {x: this.SO_11, y: this.head_height_0, z: this.row_7},
    S7_12:  {x: this.SO_12, y: this.head_height_0, z: this.row_7},
    S7_13:  {x: this.SO_13, y: this.head_height_0, z: this.row_7},
    S7_14:  {x: this.SO_14, y: this.head_height_0, z: this.row_7},
    S7_15:  {x: this.SO_15, y: this.head_height_0, z: this.row_7},
    S7_16:  {x: this.SO_16, y: this.head_height_0, z: this.row_7},
    S7_17:  {x: this.SO_17, y: this.head_height_0, z: this.row_7},
    S7_18:  {x: this.SO_18, y: this.head_height_0, z: this.row_7},
    S8_1:  {x: this.SB_1, y: this.head_height_0, z: this.row_8},
    S8_2:  {x: this.SB_2, y: this.head_height_0, z: this.row_8},
    S8_3:  {x: this.SB_3, y: this.head_height_0, z: this.row_8},
    S8_4:  {x: this.SB_4, y: this.head_height_0, z: this.row_8},
    S8_5:  {x: this.SB_5, y: this.head_height_0, z: this.row_8},
    S8_6:  {x: this.SB_6, y: this.head_height_0, z: this.row_8},
    S8_7:  {x: this.SB_7, y: this.head_height_0, z: this.row_8},
    S8_8:  {x: this.SB_8, y: this.head_height_0, z: this.row_8},
    S8_9:  {x: this.SB_9, y: this.head_height_0, z: this.row_8},
    S8_10:  {x: this.SB_10, y: this.head_height_0, z: this.row_8},
    S8_11:  {x: this.SB_11, y: this.head_height_0, z: this.row_8},
    S8_12:  {x: this.SB_12, y: this.head_height_0, z: this.row_8},
    S8_13:  {x: this.SB_13, y: this.head_height_0, z: this.row_8},
    S8_14:  {x: this.SB_14, y: this.head_height_0, z: this.row_8},
    S8_15:  {x: this.SB_15, y: this.head_height_0, z: this.row_8},
    S8_16:  {x: this.SB_16, y: this.head_height_0, z: this.row_8},
    S8_17:  {x: this.SB_17, y: this.head_height_0, z: this.row_8},
    S8_18:  {x: this.SB_18, y: this.head_height_0, z: this.row_8},
    S8_19:  {x: this.SB_19, y: this.head_height_0, z: this.row_8},
    S8_20:  {x: this.SB_20, y: this.head_height_0, z: this.row_8},
    S9_1:  {x: this.SB_1, y: this.head_height_1, z: this.row_9},
    S9_2:  {x: this.SB_2, y: this.head_height_1, z: this.row_9},
    S9_3:  {x: this.SB_3, y: this.head_height_1, z: this.row_9},
    S9_4:  {x: this.SB_4, y: this.head_height_1, z: this.row_9},
    S9_5:  {x: this.SB_5, y: this.head_height_1, z: this.row_9},
    S9_6:  {x: this.SB_6, y: this.head_height_1, z: this.row_9},
    S9_7:  {x: this.SB_7, y: this.head_height_1, z: this.row_9},
    S9_8:  {x: this.SB_8, y: this.head_height_1, z: this.row_9},
    S9_9:  {x: this.SB_9, y: this.head_height_1, z: this.row_9},
    S9_10:  {x: this.SB_10, y: this.head_height_1, z: this.row_9},
    S9_11:  {x: this.SB_11, y: this.head_height_1, z: this.row_9},
    S9_12:  {x: this.SB_12, y: this.head_height_1, z: this.row_9},
    S9_13:  {x: this.SB_13, y: this.head_height_1, z: this.row_9},
    S9_14:  {x: this.SB_14, y: this.head_height_1, z: this.row_9},
    S9_15:  {x: this.SB_15, y: this.head_height_1, z: this.row_9},
    S9_16:  {x: this.SB_16, y: this.head_height_1, z: this.row_9},
    S9_17:  {x: this.SB_17, y: this.head_height_1, z: this.row_9},
    S9_18:  {x: this.SB_18, y: this.head_height_1, z: this.row_9},
    S9_19:  {x: this.SB_19, y: this.head_height_1, z: this.row_9},
    S9_20:  {x: this.SB_20, y: this.head_height_1, z: this.row_9},
    S10_1:  {x: this.SB_1, y: this.head_height_2, z: this.row_10},
    S10_2:  {x: this.SB_2, y: this.head_height_2, z: this.row_10},
    S10_3:  {x: this.SB_3, y: this.head_height_2, z: this.row_10},
    S10_4:  {x: this.SB_4, y: this.head_height_2, z: this.row_10},
    S10_5:  {x: this.SB_5, y: this.head_height_2, z: this.row_10},
    S10_6:  {x: this.SB_6, y: this.head_height_2, z: this.row_10},
    S10_7:  {x: this.SB_7, y: this.head_height_2, z: this.row_10},
    S10_8:  {x: this.SB_8, y: this.head_height_2, z: this.row_10},
    S10_9:  {x: this.SB_9, y: this.head_height_2, z: this.row_10},
    S10_10:  {x: this.SB_10, y: this.head_height_2, z: this.row_10},
    S10_11:  {x: this.SB_11, y: this.head_height_2, z: this.row_10},
    S10_12:  {x: this.SB_12, y: this.head_height_2, z: this.row_10},
    S10_13:  {x: this.SB_13, y: this.head_height_2, z: this.row_10},
    S10_14:  {x: this.SB_14, y: this.head_height_2, z: this.row_10},
    S10_15:  {x: this.SB_15, y: this.head_height_2, z: this.row_10},
    S10_16:  {x: this.SB_16, y: this.head_height_2, z: this.row_10},
    S10_17:  {x: this.SB_17, y: this.head_height_2, z: this.row_10},
    S10_18:  {x: this.SB_18, y: this.head_height_2, z: this.row_10},
    S10_19:  {x: this.SB_19, y: this.head_height_2, z: this.row_10},
    S10_20:  {x: this.SB_20, y: this.head_height_2, z: this.row_10},
    S11_1:  {x: this.SB_1, y: this.head_height_3, z: this.row_11},
    S11_2:  {x: this.SB_2, y: this.head_height_3, z: this.row_11},
    S11_3:  {x: this.SB_3, y: this.head_height_3, z: this.row_11},
    S11_4:  {x: this.SB_4, y: this.head_height_3, z: this.row_11},
    S11_5:  {x: this.SB_5, y: this.head_height_3, z: this.row_11},
    S11_6:  {x: this.SB_6, y: this.head_height_3, z: this.row_11},
    S11_7:  {x: this.SB_7, y: this.head_height_3, z: this.row_11},
    S11_8:  {x: this.SB_8, y: this.head_height_3, z: this.row_11},
    S11_9:  {x: this.SB_9, y: this.head_height_3, z: this.row_11},
    S11_10:  {x: this.SB_10, y: this.head_height_3, z: this.row_11},
    S11_11:  {x: this.SB_11, y: this.head_height_3, z: this.row_11},
    S11_12:  {x: this.SB_12, y: this.head_height_3, z: this.row_11},
    S11_13:  {x: this.SB_13, y: this.head_height_3, z: this.row_11},
    S11_14:  {x: this.SB_14, y: this.head_height_3, z: this.row_11},
    S11_15:  {x: this.SB_15, y: this.head_height_3, z: this.row_11},
    S11_16:  {x: this.SB_16, y: this.head_height_3, z: this.row_11},
    S11_17:  {x: this.SB_17, y: this.head_height_3, z: this.row_11},
    S11_18:  {x: this.SB_18, y: this.head_height_3, z: this.row_11},
    S11_19:  {x: this.SB_19, y: this.head_height_3, z: this.row_11},
    S11_20:  {x: this.SB_20, y: this.head_height_3, z: this.row_11},
    S12_1:  {x: this.SB_1, y: this.head_height_4, z: this.row_12},
    S12_2:  {x: this.SB_2, y: this.head_height_4, z: this.row_12},
    S12_3:  {x: this.SB_3, y: this.head_height_4, z: this.row_12},
    S12_4:  {x: this.SB_4, y: this.head_height_4, z: this.row_12},
    S12_5:  {x: this.SB_5, y: this.head_height_4, z: this.row_12},
    S12_6:  {x: this.SB_6, y: this.head_height_4, z: this.row_12},
    S12_7:  {x: this.SB_7, y: this.head_height_4, z: this.row_12},
    S12_8:  {x: this.SB_8, y: this.head_height_4, z: this.row_12},
    S12_9:  {x: this.SB_9, y: this.head_height_4, z: this.row_12},
    S12_10:  {x: this.SB_10, y: this.head_height_4, z: this.row_12},
    S12_11:  {x: this.SB_11, y: this.head_height_4, z: this.row_12},
    S12_12:  {x: this.SB_12, y: this.head_height_4, z: this.row_12},
    S12_13:  {x: this.SB_13, y: this.head_height_4, z: this.row_12},
    S12_14:  {x: this.SB_14, y: this.head_height_4, z: this.row_12},
    S12_15:  {x: this.SB_15, y: this.head_height_4, z: this.row_12},
    S12_16:  {x: this.SB_16, y: this.head_height_4, z: this.row_12},
    S12_17:  {x: this.SB_17, y: this.head_height_4, z: this.row_12},
    S12_18:  {x: this.SB_18, y: this.head_height_4, z: this.row_12},
    S12_19:  {x: this.SB_19, y: this.head_height_4, z: this.row_12},
    S12_20:  {x: this.SB_20, y: this.head_height_4, z: this.row_12},
    S13_1:  {x: this.SB_5, y: this.head_height_5, z: this.row_13},
    S13_2:  {x: this.SB_6, y: this.head_height_5, z: this.row_13},
    S13_3:  {x: this.SB_7, y: this.head_height_5, z: this.row_13},
    S13_4:  {x: this.SB_8, y: this.head_height_5, z: this.row_13},
    S13_5:  {x: this.SB_9, y: this.head_height_5, z: this.row_13},
    S13_6:  {x: this.SB_10, y: this.head_height_5, z: this.row_13},
    S13_7:  {x: this.SB_11, y: this.head_height_5, z: this.row_13},
    S13_8:  {x: this.SB_12, y: this.head_height_5, z: this.row_13},
    S13_9:  {x: this.SB_13, y: this.head_height_5, z: this.row_13},
    S13_10:  {x: this.SB_14, y: this.head_height_5, z: this.row_13},
    S13_11:  {x: this.SB_15, y: this.head_height_5, z: this.row_13},
    S13_12:  {x: this.SB_16, y: this.head_height_5, z: this.row_13},
    S13_13:  {x: this.SB_17, y: this.head_height_5, z: this.row_13},
    S13_14:  {x: this.SB_18, y: this.head_height_5, z: this.row_13},
    S13_15:  {x: this.SB_19, y: this.head_height_5, z: this.row_13},
    S13_16:  {x: this.SB_20, y: this.head_height_5, z: this.row_13},
    S14_1:  {x: this.SB_5, y: this.head_height_6, z: this.row_14},
    S14_2:  {x: this.SB_6, y: this.head_height_6, z: this.row_14},
    S14_3:  {x: this.SB_7, y: this.head_height_6, z: this.row_14},
    S14_4:  {x: this.SB_8, y: this.head_height_6, z: this.row_14},
    S14_5:  {x: this.SB_9, y: this.head_height_6, z: this.row_14},
    S14_6:  {x: this.SB_10, y: this.head_height_6, z: this.row_14},
    S14_7:  {x: this.SB_11, y: this.head_height_6, z: this.row_14},
    S14_8:  {x: this.SB_12, y: this.head_height_6, z: this.row_14},
    S14_9:  {x: this.SB_13, y: this.head_height_6, z: this.row_14},
    S14_10:  {x: this.SB_14, y: this.head_height_6, z: this.row_14},
    S14_11:  {x: this.SB_15, y: this.head_height_6, z: this.row_14},
    S14_12:  {x: this.SB_16, y: this.head_height_6, z: this.row_14},
    S14_13:  {x: this.SB_17, y: this.head_height_6, z: this.row_14},
    S14_14:  {x: this.SB_18, y: this.head_height_6, z: this.row_14},
    S14_15:  {x: this.SB_19, y: this.head_height_6, z: this.row_14},
    S14_16:  {x: this.SB_20, y: this.head_height_6, z: this.row_14},
    S15_1:  {x: this.SB_5, y: this.head_height_7, z: this.row_15},
    S15_2:  {x: this.SB_6, y: this.head_height_7, z: this.row_15},
    S15_3:  {x: this.SB_7, y: this.head_height_7, z: this.row_15},
    S15_4:  {x: this.SB_8, y: this.head_height_7, z: this.row_15},
    S15_5:  {x: this.SB_9, y: this.head_height_7, z: this.row_15},
    S15_6:  {x: this.SB_10, y: this.head_height_7, z: this.row_15},
    S15_7:  {x: this.SB_11, y: this.head_height_7, z: this.row_15},
    S15_8:  {x: this.SB_12, y: this.head_height_7, z: this.row_15},
    S15_9:  {x: this.SB_13, y: this.head_height_7, z: this.row_15},
    S15_10:  {x: this.SB_14, y: this.head_height_7, z: this.row_15},
    S15_11:  {x: this.SB_15, y: this.head_height_7, z: this.row_15},
    S15_12:  {x: this.SB_16, y: this.head_height_7, z: this.row_15},
    S15_13:  {x: this.SB_17, y: this.head_height_7, z: this.row_15},
    S15_14:  {x: this.SB_18, y: this.head_height_7, z: this.row_15},
    S15_15:  {x: this.SB_19, y: this.head_height_7, z: this.row_15},
    S15_16:  {x: this.SB_20, y: this.head_height_7, z: this.row_15},
    S16_1:  {x: this.SB_3, y: this.head_height_8, z: this.row_16},
    S16_2:  {x: this.SB_4, y: this.head_height_8, z: this.row_16},
    S16_3:  {x: this.SB_5, y: this.head_height_8, z: this.row_16},
    S16_4:  {x: this.SB_6, y: this.head_height_8, z: this.row_16},
    S16_5:  {x: this.SB_7, y: this.head_height_8, z: this.row_16},
    S16_6:  {x: this.SB_8, y: this.head_height_8, z: this.row_16},
    S16_7:  {x: this.SB_9, y: this.head_height_8, z: this.row_16},
    S16_8:  {x: this.SB_10, y: this.head_height_8, z: this.row_16},
    S16_9:  {x: this.SB_11, y: this.head_height_8, z: this.row_16},
    S16_10:  {x: this.SB_12, y: this.head_height_8, z: this.row_16},
    S16_11:  {x: this.SB_13, y: this.head_height_8, z: this.row_16},
    S16_12:  {x: this.SB_14, y: this.head_height_8, z: this.row_16},
    S16_13:  {x: this.SB_15, y: this.head_height_8, z: this.row_16},
    S16_14:  {x: this.SB_16, y: this.head_height_8, z: this.row_16},
    S16_15:  {x: this.SB_17, y: this.head_height_8, z: this.row_16},
    S16_16:  {x: this.SB_18, y: this.head_height_8, z: this.row_16},
    S16_17:  {x: this.SB_19, y: this.head_height_8, z: this.row_16},
    S16_18:  {x: this.SB_20, y: this.head_height_8, z: this.row_16},
    S17_1:  {x: this.SB_1, y: this.head_height_9, z: this.row_17},
    S17_2:  {x: this.SB_2, y: this.head_height_9, z: this.row_17},
    S17_3:  {x: this.SB_3, y: this.head_height_9, z: this.row_17},
    S17_4:  {x: this.SB_4, y: this.head_height_9, z: this.row_17},
    S17_5:  {x: this.SB_5, y: this.head_height_9, z: this.row_17},
    S17_6:  {x: this.SB_6, y: this.head_height_9, z: this.row_17},
    S17_7:  {x: this.SB_7, y: this.head_height_9, z: this.row_17},
    S17_8:  {x: this.SB_8, y: this.head_height_9, z: this.row_17},
    S17_9:  {x: this.SB_9, y: this.head_height_9, z: this.row_17},
    S17_10:  {x: this.SB_10, y: this.head_height_9, z: this.row_17},
    S17_11:  {x: this.SB_11, y: this.head_height_9, z: this.row_17},
    S17_12:  {x: this.SB_12, y: this.head_height_9, z: this.row_17},
    S17_13:  {x: this.SB_13, y: this.head_height_9, z: this.row_17},
    S17_14:  {x: this.SB_14, y: this.head_height_9, z: this.row_17},
    S17_15:  {x: this.SB_15, y: this.head_height_9, z: this.row_17},
    S17_16:  {x: this.SB_16, y: this.head_height_9, z: this.row_17},
    S17_17:  {x: this.SB_17, y: this.head_height_9, z: this.row_17},
    S17_18:  {x: this.SB_18, y: this.head_height_9, z: this.row_17},
    S17_19:  {x: this.SB_19, y: this.head_height_9, z: this.row_17},
    S17_20:  {x: this.SB_20, y: this.head_height_9, z: this.row_17}

};

  currentCameraPos = this.seatCoordinates.CV_intro;

  opacity = { x: 0 };
  textOpacity = { x: 0 };
  navTextOpacity = { x: 0 };
  canvasTextOpacity = { x: 0 };

  constructor(props) {
    super(props);

    this.state = {
            currentCameraPos: this.currentCameraPos,
            bookedThisSeatText: "",
            opacity: this.opacity,
            textOpacity: this.textOpacity,
            textVisible: false,
            navTextVisible: false,
            navTextOpacity: this.navTextOpacity,
            canvasTextVisible: false,
            canvasTextOpacity: this.canvasTextOpacity
    };

    this.moveTo_CV_change_seat = this.moveTo_CV_change_seat.bind(this);
    this.tweenUpdate = this.tweenUpdate.bind(this);
    this.moveToNewView = this.moveToNewView.bind(this);
    this.idToCoordinates = this.idToCoordinates.bind(this);
    this.introAnimation = this.introAnimation.bind(this);
    this.idToBookedSeat = this.idToBookedSeat.bind(this);
    this.fadeBookedSeatTextIn = this.fadeBookedSeatTextIn.bind(this);
    this.tweenOpacityUpdate = this.tweenOpacityUpdate.bind(this);
    this.tweenTextOpacityUpdate = this.tweenTextOpacityUpdate.bind(this);
    this.fadeBookedSeatTextOut = this.fadeBookedSeatTextOut.bind(this);
    this.fadeNavTextIn = this.fadeNavTextIn.bind(this);
    this.fadeNavTextOut = this.fadeNavTextOut.bind(this);
    this.tweenNavTextOpacityUpdate = this.tweenNavTextOpacityUpdate.bind(this);
    this.fadeCanvasTextIn = this.fadeCanvasTextIn.bind(this);
    this.fadeCanvasTextOut = this.fadeCanvasTextOut.bind(this);
    this.tweenCanvasTextUpdate = this.tweenCanvasTextUpdate.bind(this);
  }

  componentDidMount() {
    this.introAnimation();
  }

  idToBookedSeat() {
    let str = this.props.yourCurrentSeat;

    let rowNum = str.substr(1, 1);
    let seatNum = str.substr(str.indexOf("_") + 1);

    this.setState({bookedThisSeatText: "You booked seat number " + seatNum + " " + "from row " + rowNum + ". Enjoy your movie!"});

    this.fadeBookedSeatTextIn();
  }

  fadeCanvasTextIn() {
    setTimeout(() => {this.setState({ canvasTextVisible: true })}, 4010);

    let newOpacity = { x: 1 };

    let tween = new TWEEN.Tween(this.canvasTextOpacity).to(newOpacity, 1000);
    tween.easing(TWEEN.Easing.Cubic.InOut);
    tween.delay(5020);
    tween.start();
    tween.onUpdate(this.tweenCanvasTextUpdate);

    setTimeout(() => {this.fadeCanvasTextOut()}, 12000);
  }

  fadeCanvasTextOut() {
    let newOpacity = { x: 0 };

    let tween = new TWEEN.Tween(this.canvasTextOpacity).to(newOpacity, 1000);
    tween.easing(TWEEN.Easing.Cubic.InOut);
    tween.start();
    tween.onUpdate(this.tweenCanvasTextUpdate);

    setTimeout(() => {this.setState({canvasTextVisible: false})}, 1001);
  }

  tweenCanvasTextUpdate() {
    this.setState({ canvasTextOpacity: this.canvasTextOpacity });
  }

  fadeBookedSeatTextIn() {
    this.setState({ textVisible: true });

    let newOpacity = { x: 1 };

    let tween = new TWEEN.Tween(this.textOpacity).to(newOpacity, 1000);
    tween.easing(TWEEN.Easing.Cubic.InOut);
    tween.start();
    tween.onUpdate(this.tweenTextOpacityUpdate);

    setTimeout(() => {this.fadeBookedSeatTextOut()}, 6000);
  }

  fadeBookedSeatTextOut() {
    let newOpacity = { x: 0 };

    let tween = new TWEEN.Tween(this.textOpacity).to(newOpacity, 1000);
    tween.easing(TWEEN.Easing.Cubic.InOut);
    tween.start();
    tween.onUpdate(this.tweenTextOpacityUpdate);

    setTimeout(() => {this.setState({textVisible: false})}, 1001);
  }

  tweenTextOpacityUpdate() {
    this.setState({ textOpacity: this.textOpacity });
  }

  fadeNavTextIn() {
    this.setState({ navTextVisible: true });

    let newOpacity = { x: 1 };

    let tween = new TWEEN.Tween(this.navTextOpacity).to(newOpacity, 1000);
    tween.easing(TWEEN.Easing.Cubic.InOut);
    tween.delay(12000);
    tween.start();
    tween.onUpdate(this.tweenNavTextOpacityUpdate);

    setTimeout(() => {this.fadeNavTextOut()}, 18000);
  }

  fadeNavTextOut() {
    let newOpacity = { x: 0 };

    let tween = new TWEEN.Tween(this.navTextOpacity).to(newOpacity, 1000);
    tween.easing(TWEEN.Easing.Cubic.InOut);
    tween.start();
    tween.onUpdate(this.tweenNavTextOpacityUpdate);

    setTimeout(() => {this.setState({navTextVisible: false})}, 1001);
  }

  tweenNavTextOpacityUpdate() {
    this.setState({ navTextOpacity: this.navTextOpacity });
  }

  tweenOpacityUpdate() {
    this.setState({ opacity: this.opacity });
  }

  moveToNewView(newView, time, delay) {
    let tween = new TWEEN.Tween(this.currentCameraPos).to(newView, time);
    tween.easing(TWEEN.Easing.Cubic.InOut);
    tween.delay(delay);
    tween.start();
    tween.onUpdate(this.tweenUpdate);
  }

  tweenUpdate() {
    this.setState({currentCameraPos: this.currentCameraPos});
  }

  introAnimation() {
    let movie = document.querySelector('#movie');
    movie.play();
    this.moveToNewView(this.seatCoordinates.CV_intro_2, 6000, 3000);
    setTimeout(() => {this.moveToNewView(this.seatCoordinates.S7_1, 5000, 0)}, 8000);
    this.fadeNavTextIn();
  }

  moveTo_CV_change_seat() {
    this.moveToNewView(this.seatCoordinates.CV_change_seat, 4000, 500);
  }

  idToCoordinates(id) {
    this.moveToNewView(this.seatCoordinates[id], 4000, 0);
  }

  render() {
      return (
          <Entity id="cameraEntity" position={ [this.state.currentCameraPos.x, this.state.currentCameraPos.y, this.state.currentCameraPos.z] }>
            <Navigation handleChangeSeatClick={ this.props.handleChangeSeatClick }
                        handleBookSeatClick={ this.idToBookedSeat }/>
            <Entity visible={this.state.navTextVisible}
                    material={{color: 'white', transparent: true, shader: 'flat', opacity: this.state.navTextOpacity.x}}
                    position={[-5, -2, -8]}
                    size={0.01}
                    text={{text: "Look down to see the navigation."}} />
            <Entity visible={this.state.textVisible}
                    material={{color: 'white', transparent: true, shader: 'flat', opacity: this.state.textOpacity.x}}
                    position={[-9, -4, -8]}
                    size={0.01}
                    text={{text: this.state.bookedThisSeatText}} />
            <Entity camera=""
                    universal-controls
                    touch-controls="enabled: false"
                    keyboard-controls="enabled: true">
              <Entity visible={this.state.canvasTextVisible}
                      material={{color: 'white', transparent: true, shader: 'flat', opacity: this.state.canvasTextOpacity.x}}
                      position={[-10, -5, -10]}
                      size={0.001}
                      text={{text: "You can sit in another seat by clicking a red button on the canvas."}} />
              <Cursor ref="cursor"/>
            </Entity>
          </Entity>
      );
    }
}
