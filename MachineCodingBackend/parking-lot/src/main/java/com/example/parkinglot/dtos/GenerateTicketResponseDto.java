package com.example.parkinglot.dtos;

import com.example.parkinglot.models.Ticket;

import lombok.Data;

@Data
public class GenerateTicketResponseDto {

    private Ticket ticket;
    private ResponseStatus responseStatus;
}
