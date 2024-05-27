import Stack from "@mui/material/Stack";
import React from "react";
import Cajoncito from "../atoms/inputs/Cajoncito";
import { Person } from "@/app/api/person/interface/person";

interface PersonalInfoProps {
  data: Person;
  disabled: boolean;
  required: boolean;
  onDataChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Person
  ) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  data,
  onDataChange,
  disabled,
  required,
}) => {
  return (
    <Stack spacing={1} direction="column">
      <Cajoncito
        title={"Tipo de documento"}
        value={data.type}
        onChange={(e) => {
          onDataChange(e, "type");
        }}
        disabled={disabled}
        required={required}
      />
      <Cajoncito
        title={"Número de documento"}
        value={data.id_doc}
        onChange={(e) => {
          onDataChange(e, "id_doc");
        }}
        disabled={disabled}
        required={required}
      />
      <Cajoncito
        title={"Nombre"}
        value={data.name}
        onChange={(e) => {
          onDataChange(e, "name");
        }}
        disabled={disabled}
        required={required}
      />
      <Cajoncito
        title={"Apellidos"}
        value={data.lastname}
        onChange={(e) => {
          onDataChange(e, "lastname");
        }}
        disabled={disabled}
        required={required}
      />
      <Cajoncito
        title={"Correo"}
        value={data.mail}
        onChange={(e) => {
          onDataChange(e, "mail");
        }}
        disabled={disabled}
        required={required}
      />
      <Cajoncito
        title={"Teléfono"}
        value={data.phone}
        onChange={(e) => {
          onDataChange(e, "phone");
        }}
        disabled={disabled}
        required={required}
      />
    </Stack>
  );
};

export default PersonalInfo;
