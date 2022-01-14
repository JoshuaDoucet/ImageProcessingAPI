//icelandwaterfall

// resizeImageSpec.ts
// Jasmine tests for the resizeImageSpec.ts source file

// get resizing image module
import imgSizer from '../../utilities/resizeImages';

describe('Tests resizeJpg function to see if correct boolean is returned', () => {
  it('returns false when an imgName provided does not exist in the public/images/original dir', async (): Promise<
    void
  > => {
    const result = await imgSizer.resizeJpg(
      'file_not_in_assets_1_2_3',
      200,
      200
    );
    expect(result).toBe(false);
  });
  it('returns true when an imgName provided is in the assets/images/full dir', async (): Promise<
    void
  > => {
    const result = await imgSizer.resizeJpg('icelandwaterfall', 200, 200);
    expect(result).toBe(true);
  });
});
