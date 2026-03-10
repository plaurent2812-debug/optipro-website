import { optiboardPacks, servicePacks } from '@/data/packs';
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
    });

    describe('servicePacks', () => {
        it('has exactly 3 packs', () => {
            expect(servicePacks).toHaveLength(3);
        });

        it('all packs have required fields', () => {
            servicePacks.forEach((pack) => {
                expect(pack.id).toBeTruthy();
                expect(pack.name).toBeTruthy();
                expect(pack.price).toBeTruthy();
                expect(pack.contactParam).toBeTruthy();
                expect(pack.features.length).toBeGreaterThan(0);
            });
        });

        it('has exactly one highlighted pack', () => {
            const highlighted = servicePacks.filter((p) => p.highlighted);
            expect(highlighted).toHaveLength(1);
        });
    });

    describe('addons', () => {
        it('has exactly 3 addons', () => {
            expect(addons).toHaveLength(3);
        });

        it('all addons have required fields', () => {
            addons.forEach((addon) => {
                expect(addon.id).toBeTruthy();
                expect(addon.name).toBeTruthy();
                expect(addon.icon).toBeTruthy();
                expect(addon.description).toBeTruthy();
            });
        });
    });

    describe('sectors', () => {
        it('has exactly 3 sectors', () => {
            expect(sectors).toHaveLength(3);
        });

        it('all sectors have required fields', () => {
            sectors.forEach((sector) => {
                expect(sector.id).toBeTruthy();
                expect(sector.title).toBeTruthy();
                expect(sector.challenges).toBeTruthy();
                expect(sector.solution).toBeTruthy();
            });
        });
    });
});
