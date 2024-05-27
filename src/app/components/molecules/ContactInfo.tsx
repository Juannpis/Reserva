import Stack from "@mui/material/Stack";
import React from "react";
import Cajoncito from "../atoms/inputs/Cajoncito";
import BodyText from "../atoms/texts/BodyText";
import { Person } from "@/app/api/person/interface/person";

interface ContactInfoProps {
  data: Person;
  disabled: boolean;
  required: boolean;
  onDataChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Person
  ) => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  data,
  onDataChange,
  disabled,
  required,
}) => {
  return (
    <Stack spacing={1} direction="column" alignItems="center">
      <BodyText text="Contacto de emergencia:" sx={{ fontWeight: "bold" }} />
      <BodyText text="Es necesario un contacto de emergencia" />
      <Cajoncito
        title={"Nombre"}
        value={data.contact_name}
        onChange={(e) => {
          onDataChange(e, "contact_name");
        }}
        disabled={disabled}
        required={required}
      />
      <Cajoncito
        title={"Apellidos"}
        value={data.contact_lastname}
        onChange={(e) => {
          onDataChange(e, "contact_lastname");
        }}
        disabled={disabled}
        required={required}
      />
      <Cajoncito
        title={"Télefono"}
        value={data.contact_phone}
        onChange={(e) => {
          onDataChange(e, "contact_phone");
        }}
        disabled={disabled}
        required={required}
      />
    </Stack>
  );
};

export default ContactInfo;
