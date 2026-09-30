# pip install pillow
from pathlib import Path
from PIL import Image, ImageOps

src, dst = Path("images_original"), Path("images")   # your big folder -> web-sized copy
for f in src.rglob("*"):
    if f.suffix.lower() in {".jpg", ".jpeg", ".png", ".tif", ".tiff", ".webp"}:
        out = dst / f.relative_to(src).with_suffix(".jpg")
        out.parent.mkdir(parents=True, exist_ok=True)
        im = ImageOps.exif_transpose(Image.open(f)).convert("RGB")  # keeps phone/camera rotation correct
        im.thumbnail((1600, 1600))                                  # longest side 1600px
        im.save(out, "JPEG", quality=82, optimize=True, progressive=True)