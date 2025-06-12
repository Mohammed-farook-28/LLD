package com.example.parkinglot.models;

import java.time.LocalDateTime;

import com.example.parkinglot.models.enums.ParkingType;
import com.example.parkinglot.models.enums.TicketStatus;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "parking_tickets")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Ticket {

    @Id
    private String ticketId;
    private String qrCodeId;

    @OneToOne(cascade = CascadeType.ALL)
    private Vehicle vehicle;

    private String floorNumber ;
    private String parkingSlotNumber;

    private LocalDateTime entryTime;

    @Enumerated(EnumType.STRING)
    private ParkingType parkingType;
    
    @Enumerated(EnumType.STRING)
    private TicketStatus ticketStatus;

    private String IssuedByAdminId ;
    
}
