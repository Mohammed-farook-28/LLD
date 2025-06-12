package com.example.parkinglot.controllers;

import com.example.parkinglot.dtos.GenerateTicketRequestDto;
import com.example.parkinglot.dtos.GenerateTicketResponseDto;
import com.example.parkinglot.models.enums.VehicleType;

public class TicketController {

    public GenerateTicketResponseDto GenerateTicketRequestDto(GenerateTicketRequestDto requestDto){
        String vehicleNumber =  requestDto.getVehicleNumber();
        String vehicleModel =  requestDto.getVehicleModel();
        VehicleType vehicleType  =  requestDto.getVehicleType();
        




        return null;
    }
}
