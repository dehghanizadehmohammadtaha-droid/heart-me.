// الگوی پیکسلیِ قلب: '1' یعنی یک قلب کوچک کشیده شود، '0' یعنی خالی.
// طول هر سطر باید یکی باشد. می‌تونی این آرایه را تغییر بدهی تا شکل متفاوت شود.
const pattern = [
  "0011100111000",
  "0111111111110",
  "1111111111111",
  "1111111111111",
  "1111111111111",
  "0111111111110",
  "0011111111100",
  "0001111111000",
  "0000111100000",
  "0000011000000"
];

const cell = 40; // اندازه هر قلب کوچک (پیکسل) — همان مقدار در CSS (.heart width/height)
const container = document.getElementById('heartGrid');
const rows = pattern.length;
const cols = pattern[0].length;

// تنظیم سایز کانتینر بر اساس الگو
container.style.width = $;{cols * cell}px;
container.style.height = $;{rows * cell}px;
container.style.position = 'relative';

// ساخت عناصر قلب‌ها طبق الگو، با انیمیشن پاپ ترتیبی
let delay = 0;
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    if (pattern[r][c] === '1') {
      const el = document.createElement('div');
      el.className = 'heart';
      el.style.left = $;{c * cell}px;
      el.style.top = $;{r * cell}px;

      // وقتی روی قلب کلیک شد، یک انفجار کوچک (scale) انجام بده
      el.addEventListener('click', () => {
        el.classList.remove('pop');
        // باز پخش انیمیشن کوچک
        setTimeout(() => el.classList.add('pop'), 10);
      });

      container.appendChild(el);

      // staggered appearance
      setTimeout(() => el.classList.add('pop'), delay);
      delay += 25; // هر 25 میلی‌ثانیه یک قلب وارد می‌شود (می‌توان کم/زیاد کرد)
    }
  }
}