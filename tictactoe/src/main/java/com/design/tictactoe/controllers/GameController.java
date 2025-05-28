package com.design.tictactoe.controllers;

import java.util.List;

import com.design.tictactoe.models.Game;
import com.design.tictactoe.models.GameState;

public class GameController {

    public Game startNewGame(int dimension , List<Player> players) {
        Game game =  new Game();
        game.builder()
                .setDimension(dimension)
                .setPlayers(players)
                .build();
        return game;
    }

    public void makeMove(Game game){

    }
    
    public GameState getGameState(Game game){
        return game.gameState();
    }

}
