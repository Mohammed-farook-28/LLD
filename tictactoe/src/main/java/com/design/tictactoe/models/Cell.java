package com.design.tictactoe.models;

import lombok.Data;

public class Cell {
    private int row;
    private int column;
    private CelllState celllState;
    private Player player;

    public Cell(int row , int col){
        this.row = row ;
        this.col = col ;
        this.celllState = CelllState.EMPTY;
    }


}
