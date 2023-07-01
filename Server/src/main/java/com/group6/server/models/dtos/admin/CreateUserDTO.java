package com.group6.server.models.dtos.admin;

import com.group6.server.models.dtos.SignInGoogleDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Data
public class CreateUserDTO extends SignInGoogleDTO {
}
