import type { Mock } from 'vitest';
import axios from 'axios';

import getManufacturers from '@/api/getManufacturers';

vi.mock('axios');
const axiosGetMock = axios.get as Mock;

describe('getManufacturers', () => {
  beforeEach(() => {
    axiosGetMock.mockResolvedValue({
      data: [['Abarth', 'Acura', 'Alfa Romeo']],
    });
  });

  it('fetches all available manufacturers', async () => {
    await getManufacturers();
    expect(axios.get).toHaveBeenCalledWith('http://myfakeapi.com/manufacturers');
  });

  it('extracts manufacturers from response', async () => {
    const manufacturers = await getManufacturers();
    expect(manufacturers).toEqual([['Abarth', 'Acura', 'Alfa Romeo']]);
  });
});
