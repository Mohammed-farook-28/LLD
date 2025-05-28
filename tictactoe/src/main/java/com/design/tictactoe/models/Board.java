package com.design.tictactoe.models;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;


public class Board {
    private int dimension;
    List<List<Cell>> cells;

    public Board(int dimension){
        this.dimension = dimension;
        this.board = new ArrayList<>();
        for(int i = 0;  i < this.dimension ; i++){
            board.add(new ArrayList<>());

            for(int j = 0 ; j  < this.dimension ; j++){
                board.get(i).add(new Cell(i , j ));
            }
        }
    }

    public int getDimension() {
        return dimension;
    }
    public void setDimension(int dimension) {
        this.dimension = dimension;
    }
    public List<List<Cell>> getCells() {
        return cells;
    }
    public void setCells(List<List<Cell>> cells) {
        this.cells = cells;
    }

}
