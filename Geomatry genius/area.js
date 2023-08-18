function calculateTriangleArea() {
    //get the base value from input
    const baseField = document.getElementById('triangleBase');
    const baseFieldText = baseField.value;
    const base = parseFloat(baseFieldText);
    console.log(base);

    //get triangle height value
    const heightField = document.getElementById('triangleHeight');
    const heightFieldText = heightField.value;
    const height = parseFloat(heightFieldText);
    console.log(height);
    //validation
    if(!base || !height) {
        return alert('Please write a number.')
    }
    //Now calculate the area
    const triangleArea = (0.5 * base * height);
    console.log(triangleArea);
    //Now set the value to the area.
    const areaTag = document.getElementById('area');
    areaTag.innerText = triangleArea;

}



function calculateRectangleArea() {
    //get the width value from input
    const widthField = document.getElementById('rectangleWidth');
    const widthFieldText = widthField.value;
    const width = parseFloat(widthFieldText);
    console.log(width);
    //get the length value from input
    const lengthField = document.getElementById('rectangleLength');
    const lengthFieldText = lengthField.value;
    const length = parseFloat(lengthFieldText);
    console.log(length);
    //Now calculate the area
    const rectangleArea = ( width * length);
    console.log(rectangleArea);
    //Now set the value to the area.
    const areaTag = document.getElementById('rectangleArea');
    areaTag.innerText = rectangleArea;
}