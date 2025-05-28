package com.design.tictactoe.models;

import lombok.Data;

@Data
public class Player {
    private String name ;
    private Symbol symbol;  
    private PlayerType playerType;
}
