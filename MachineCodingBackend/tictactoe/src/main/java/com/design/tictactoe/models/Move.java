package com.design.tictactoe.models;

import lombok.Data;

@Data
public class Move {
    private Cell cell;
    private Player player;
}
