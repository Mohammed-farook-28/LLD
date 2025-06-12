package com.example.parkinglot.models;

import com.example.parkinglot.models.enums.SlotOccupancyStatus;
import com.example.parkinglot.models.enums.VehicleType;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@Table(name="parking_slots")
@NoArgsConstructor
@AllArgsConstructor
public class ParkingSlot {

    @Id
    private String slotId;
    private String slotNumber;

    @Enumerated(EnumType.STRING)
    private VehicleType sloType;

    @Enumerated(EnumType.STRING)
    private SlotOccupancyStatus occupancyStatus;


    private String currentTicketId;
    private String floorId;



}
