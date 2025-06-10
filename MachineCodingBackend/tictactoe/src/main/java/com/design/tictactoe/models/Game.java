package com.design.tictactoe.models;

import java.io.EOFException;
import java.util.ArrayList;
import java.util.List;

import lombok.Builder;
import lombok.Data;

public class Game {
   private Board board;
   private List<Player> players;
   private Player winner;
   private GameState  gameState;
   private List<Move> moves;
   private int currentPlayerIndex;

   private Game(int dimension , List<Player> players){
        this.board = new Board(dimension);
        this.players = players;
        this.gameState =  GameState.IN_PROGRESS;
        this.moves =  new ArrayList<>();
        this.currentPlayerIndex = 0 ;
   }

   public Board getBoard() {
    return board;
}

   public List<Player> getPlayers() {
    return players;
   }

   public Player getWinner() {
    return winner;
   }

   public GameState getGameState() {
    return gameState;
   }

   public List<Move> getMoves() {
    return moves;
   }

   public int getCurrentPlayerIndex() {
    return currentPlayerIndex;
   }

   public static Builder getBuilder(){
        return new Builder();
   }
public static class Builder {
    private Board board;
    private List<Player> players;
    private Player winner;
    private GameState gameState;
    private List<Move> moves;
    private int currentPlayerIndex;

    public Builder board(Board board) {
        this.board = board;
        return this;
    }

    public Builder players(List<Player> players) {
        this.players = players;
        return this;
    }

    public Builder winner(Player winner) {
        this.winner = winner;
        return this;
    }

    public Builder gameState(GameState gameState) {
        this.gameState = gameState;
        return this;
    }

    public Builder moves(List<Move> moves) {
        this.moves = moves;
        return this;
    }

    public Builder currentPlayerIndex(int currentPlayerIndex) {
        this.currentPlayerIndex = currentPlayerIndex;
        return this;
    }

    private void validateBotCount() {
        int botCount = 0;
        for (Player p : players) {
            if (p.getPlayerType().equals(PlayerType.BOT)) {
                botCount++;
            }
        }
        if (botCount > 1) throw new InvalidBotCountException("Bot count should not be higher than 1");
    }

    private void validatePlayerCount() {
        int playerCount = 0;
        for (Player p : players) {
            if (p.getPlayerType().equals(PlayerType.HUMAN)) {
                playerCount++;
            }
        }
        if (playerCount > 1) throw new InvalidBotCountException("Bot count should be higher than 1");
    }
}
    private boolean validateUniqueSymbols(){
        
    }
    private void validateGames(){
       validateBotCount();
        validatePlayerCount();
       validateUniqueSymbols();
    }

    public Game build() {
        validateGames();
        return new Game(dimension , players);
        
    }
}
    

