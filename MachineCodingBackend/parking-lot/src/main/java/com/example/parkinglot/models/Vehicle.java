package com.example.parkinglot.models;

import com.example.parkinglot.models.enums.VehicleType;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "vehicles")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Vehicle {
    @Id
    private String vehicleNumber;

    @Enumerated(EnumType.STRING)
    private VehicleType type;
    private String brand;
    private String model;
    private String color;
    private String userId; // Optional
}