package com.example.parkinglot.models;

import java.util.List;
import java.util.Map;
import java.util.Set;

import com.example.parkinglot.models.enums.VehicleType;

import jakarta.persistence.CascadeType;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name ="floor")
@Builder
public class Floor {
    @Id
    private String floorId;
    private String floorNumber;

    @Enumerated(EnumType.STRING)
    private Set<VehicleType> allowedVehicleTypes;

    private Map<VehicleType , Integer> maxCapacityPerType;
    
    @OneToMany(cascade = CascadeType.ALL)
    private List<ParkingSlot> parkingSlots;
    
    private String assignedSecurityId;
    private String adminId;
    private String locationName;
    
}
