export interface Estado {
    total_results: number;
    data: Array<{
        docId: string;
        estado: {
nome: any;
            cod: number;
            endereco: string;
            container: string;
            created_at: string;
            updated_at: string | null;
            deleted_at: string | null;
        };
    }>;
}
