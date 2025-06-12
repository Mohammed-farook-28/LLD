package com.example.parkinglot.models;

import java.util.List;

import com.example.parkinglot.models.enums.ParkingLotStatus;
import com.example.parkinglot.models.enums.VehicleType;

import jakarta.persistence.CascadeType;
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
@Table(name = "parking_lots")
@Builder
public class ParkiingLot {

    @Id
    private String parkingLotid;

    private String name ;
    private String  address;

    @OneToMany(cascade = CascadeType.ALL)
    List<Floor> floors;
    List<VehicleType> vehicleTypes;

    private ParkingLotStatus parkingLotStatus;

}
