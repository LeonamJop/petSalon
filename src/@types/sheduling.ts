export type Sheduling = {
    id: number;
    external_id: string;
    bath: boolean;
    clipping: string;
    hydration: boolean;
    clearance: boolean;
    brush_teeth: boolean;
    cut_nails: boolean;
    transport: boolean;
    date_appointment: string;
    hour_appointment: string;
    payment: number;
    pet: {
        name: string;
    };
}