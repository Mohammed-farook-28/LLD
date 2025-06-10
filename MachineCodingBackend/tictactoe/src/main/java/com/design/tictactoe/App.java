package com.design.tictactoe;

import java.util.ArrayList;

import com.design.tictactoe.controllers.GameController;

public class App 
{
    public static void main( String[] args )
    {
       GameController gameController =  new GameController();
       gameController.startNewGame(3, new ArrayList<>());
    }
}
