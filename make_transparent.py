from PIL import Image

def remove_background(image_path, output_path, tolerance=30):
    img = Image.open(image_path).convert("RGBA")
    data = img.getdata()
    
    # Get the background color (assume top-left pixel is background)
    bg_color = data[0]
    
    new_data = []
    for item in data:
        # Check if pixel is within tolerance of background color
        if (abs(item[0] - bg_color[0]) <= tolerance and
            abs(item[1] - bg_color[1]) <= tolerance and
            abs(item[2] - bg_color[2]) <= tolerance):
            # Replace with transparent pixel
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

remove_background("public/company-design.png", "public/company-design.png", tolerance=20)
print("Done!")
