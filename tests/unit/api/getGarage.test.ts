import type { Mock } from 'vitest';
import axios from 'axios';

import getGarage from '@/api/getGarage';

vi.mock('axios');
const axiosGetMock = axios.get as Mock;

describe('getGarage', () => {
  beforeEach(() => {
    axiosGetMock.mockResolvedValue({
      data: {
        garage: ["Abarth 595 '68", 'Abarth 131', "Abarth 695 '16"],
      },
    });
  });

  it('fetches all available cars id from garage', async () => {
    await getGarage();
    expect(axios.get).toHaveBeenCalledWith('http://myfakeapi.com/user');
  });

  it('extracts cars from response', async () => {
    const cars = await getGarage();

    expect(cars).toEqual(["Abarth 595 '68", 'Abarth 131', "Abarth 695 '16"]);
  });
});
