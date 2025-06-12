package com.example.parkinglot.models;

import java.time.LocalDateTime;

import com.example.parkinglot.models.enums.PaymentStatus;
import com.example.parkinglot.models.enums.PaymentType;

import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name ="payments")
@Builder
public class Payment {

    @Id
    private String id ;

    private double amount;
    private PaymentType paymentType;

    private LocalDateTime paymentTime;

    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus;
    
    private String referenceId;
    
}
