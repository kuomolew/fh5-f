import type { Mock } from 'vitest';
import axios from 'axios';

import getCars from '@/api/getCars';

vi.mock('axios');
const axiosGetMock = axios.get as Mock;

describe('getCars', () => {
  beforeEach(() => {
    axiosGetMock.mockResolvedValue({
      data: [
        {
          id: "Abarth 595 '68",
          manufacturer: 'Abarth',
        },
      ],
    });
  });

  it('fetches all available cars', async () => {
    await getCars();
    expect(axios.get).toHaveBeenCalledWith('http://myfakeapi.com/cars');
  });

  it('extracts cars from response', async () => {
    const cars = await getCars();
    expect(cars).toEqual([{ id: "Abarth 595 '68", manufacturer: 'Abarth' }]);
  });
});
