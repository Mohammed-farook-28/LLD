package com.example.parkinglot.dtos;

import com.example.parkinglot.models.enums.VehicleType;

import lombok.Data;


@Data
public class GenerateTicketRequestDto {
    private String vehicleNumber;
    private String vehicleModel;
    private VehicleType vehicleType;


}
