import { useContext } from "react";
import FormContext from "../context/FormProvider";

export default function useForm () {
  return useContext(FormContext);
};