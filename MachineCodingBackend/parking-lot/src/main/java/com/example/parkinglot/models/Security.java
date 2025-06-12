package com.example.parkinglot.models;

import java.time.LocalDate;

import com.example.parkinglot.models.enums.ShiftType;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "security")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Security {
    @Id
    private String securityId;
    
    private String name;
    private String assignedFloorId;
    private double salary;
    private LocalDate dateOfBirth;

    @Enumerated(EnumType.STRING)
    private ShiftType shiftType;
}
