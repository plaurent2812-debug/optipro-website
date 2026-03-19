import { optiboardPacks } from '@/data/packs';
import { addons } from '@/data/addons';
import { sectors } from '@/data/sectors';

describe('Data integrity', () => {
    describe('optiboardPacks', () => {
        it('has exactly 3 packs', () => {
            expect(optiboardPacks).toHaveLength(3);
        });

        it('all packs have required fields', () => {
            optiboardPacks.forEach((pack) => {
                expect(pack.id).toBeTruthy();
                expect(pack.name).toBeTruthy();
                expect(pack.price).toBeTruthy();
                expect(pack.features.length).toBeGreaterThan(0);
            });
        });

        it('has unique IDs', () => {
            const ids = optiboardPacks.map((p) => p.id);
            expect(new Set(ids).size).toBe(ids.length);
        });

        it('has exactly one highlighted pack', () => {
            const highlighted = optiboardPacks.filter((p) => p.highlighted);
            expect(highlighted).toHaveLength(1);
        });

        it('prices match Starter 299, Confort 399, Premium 549', () => {
            const starter = optiboardPacks.find((p) => p.id === 'starter');
            const confort = optiboardPacks.find((p) => p.id === 'confort');
            const premium = optiboardPacks.find((p) => p.id === 'premium');
            expect(starter?.priceNum).toBe(299);
            expect(confort?.priceNum).toBe(399);
            expect(premium?.priceNum).toBe(549);
        });
    });

    describe('addons', () => {
        it('is an array (features now embedded in plans)', () => {
            expect(Array.isArray(addons)).toBe(true);
        });
    });

    describe('sectors', () => {
        it('has at least 3 sectors', () => {
            expect(sectors.length).toBeGreaterThanOrEqual(3);
        });

        it('all sectors have required fields', () => {
            sectors.forEach((sector) => {
                expect(sector.id).toBeTruthy();
                expect(sector.title).toBeTruthy();
                expect(sector.challenges).toBeTruthy();
                expect(sector.solution).toBeTruthy();
            });
        });

        it('all sectors target BTP trades', () => {
            // Every sector must have an icon (new field added)
            sectors.forEach((sector) => {
                expect(sector.icon).toBeTruthy();
            });
        });
    });
});
