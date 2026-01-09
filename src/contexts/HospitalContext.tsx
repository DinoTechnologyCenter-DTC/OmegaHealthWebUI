import React, { createContext, useContext, useEffect, useState } from 'react';
import { hospitalService } from '../services/api';

type Hospital = {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  imageUrl?: string;
};

type HospitalContextType = {
  hospitals: Hospital[];
  loading: boolean;
  error: string | null;
  getHospitalById: (id: string) => Promise<Hospital | undefined>;
  refreshHospitals: () => Promise<void>;
};

const HospitalContext = createContext<HospitalContextType | undefined>(undefined);

export const HospitalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHospitals = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await hospitalService.getAllHospitals();
      setHospitals(data);
    } catch (err) {
      setError('Failed to fetch hospitals');
      console.error('Error fetching hospitals:', err);
    } finally {
      setLoading(false);
    }
  };

  const getHospitalById = async (id: string) => {
    try {
      const hospital = await hospitalService.getHospitalById(id);
      return hospital;
    } catch (err) {
      console.error(`Error fetching hospital with id ${id}:`, err);
      return undefined;
    }
  };

  useEffect(() => {
    fetchHospitals();
  }, []);

  return (
    <HospitalContext.Provider
      value={{
        hospitals,
        loading,
        error,
        getHospitalById,
        refreshHospitals: fetchHospitals,
      }}
    >
      {children}
    </HospitalContext.Provider>
  );
};

export const useHospitals = (): HospitalContextType => {
  const context = useContext(HospitalContext);
  if (context === undefined) {
    throw new Error('useHospitals must be used within a HospitalProvider');
  }
  return context;
};
