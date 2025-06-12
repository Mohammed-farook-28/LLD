package com.example.parkinglot.models;

import java.time.LocalDateTime;
import java.util.List;

import com.example.parkinglot.models.enums.BillStatus;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name ="bills")
@Builder
public class Bill {

    @Id
    private String billId;
    private String billNumber;

    private Ticket ticket;

    private LocalDateTime exitTime;
    private double amount;

    @OneToMany(cascade =  CascadeType.ALL)
    private List<Payment> payments;

    private String issuedByAdminId;
    private BillStatus billstatus;
    
}
