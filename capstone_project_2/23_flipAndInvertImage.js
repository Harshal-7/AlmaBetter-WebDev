function worstflipAndInvertImage(image)
{
    if (!image || image.length === 0 || image[0].length === 0) 
    {
      return [];
    }
  
    const numRows = image.length;
    const numCols = image[0].length;
  
    for (let row = 0; row < numRows; row++)
    {    
        let left = 0;
        let right = numCols - 1;

        // Reverse the row in-place
        while (left <= right)
        {
            const temp = image[row][left];
            image[row][left] = 1 - image[row][right];   // Invert the pixel
            image[row][right] = 1 - temp;               // Invert the pixel
            left++;
            right--;
        }
    }
    return image;
}

function bestflipAndInvertImage(image)
{
    if (!image || image.length === 0 || image[0].length === 0)
    {
        return [];
    }

    for (let row of image)
    {
        for (let i = 0, j = row.length - 1; i <= j; i++, j--)
        {
            [row[i], row[j]] = [1 - row[j], 1 - row[i]];
        }
    }
    return image;
}

const input1 = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];
const input2 = [[1, 1, 0, 0],[1, 0, 0, 1],[0, 1, 1, 1],[1, 0, 1, 0]];
  
const output1 = worstflipAndInvertImage(input1);
const output2 = bestflipAndInvertImage(input2);

console.log(output1);
console.log(output2);

/*
Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]

Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

*/