export interface Doctor {
  id?: number;
  nombre: string;
  especialidad: string;
  email: string;
  telefono: string;
  fechaContratacion: string; 
  status?: string;
  clinicaId: number;
}