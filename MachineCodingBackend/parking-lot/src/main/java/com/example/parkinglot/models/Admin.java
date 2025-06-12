package com.example.parkinglot.models;

import java.time.LocalDate;

import com.example.parkinglot.models.enums.AdminRole;
import com.example.parkinglot.models.enums.ShiftType;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name ="admins")
@Builder
public class Admin {
    @Id
    private String empId;
    private String name;
    private String username;
    private String passwordHash;

    @Enumerated(EnumType.STRING)
    private AdminRole role;

    private double salary;
    private LocalDate dateOfBirth;
    private String currentGate;
    
     @Enumerated(EnumType.STRING)
    private ShiftType shiftType;

}