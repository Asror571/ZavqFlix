# ZavqFlix

ZavqFlix - bu kino va seriallarni onlayn tomosha qilish uchun mo'ljallangan zamonaviy veb-platforma.

## Xususiyatlar

- 🎬 Kino va seriallar katalogi
- 🔍 Qidiruv va filtrlash
- 📱 Responsive dizayn
- 🌙 Qorong'u tema
- 🆓 Bepul platform
- ▶️ YouTube trailer integratsiyasi

## Texnologiyalar

- **Frontend**: React 19, Vite, React Router
- **Styling**: CSS3, Responsive Design
- **Icons**: Lucide React
- **Video Player**: React Player
- **Notifications**: React Hot Toast

## O'rnatish

1. Repositoriyani klonlash:
```bash
git clone <repository-url>
cd ZavqFlix
```

2. Paketlarni o'rnatish:
```bash
npm install
```

3. Ishga tushirish:
```bash
npm run dev
```

## Deploy qilish

### Vercel'da deploy qilish (Tavsiya etiladi):
```bash
npm install -g vercel
vercel --prod
```

### Netlify'da deploy qilish:
```bash
npm run build
# dist papkasini Netlify'ga yuklang
```

### Manual deploy:
```bash
npm run build
npm run deploy
```

## Loyiha tuzilishi

```
├── public/          # Statik fayllar
├── src/
│   ├── components/  # React komponentlar
│   ├── pages/       # Sahifa komponentlari
│   ├── assets/      # Rasmlar va boshqa resurslar
│   └── ...
├── package.json     # Loyiha konfiguratsiyasi
├── vite.config.js   # Vite konfiguratsiyasi
└── vercel.json      # Deploy konfiguratsiyasi
```

## Hissa qo'shish

1. Fork qiling
2. Feature branch yarating (`git checkout -b feature/AmazingFeature`)
3. O'zgarishlarni commit qiling (`git commit -m 'Add some AmazingFeature'`)
4. Branch ga push qiling (`git push origin feature/AmazingFeature`)
5. Pull Request oching

## Litsenziya

Bu loyiha MIT litsenziyasi ostida tarqatiladi.

## Demo

🌐 **Live Demo**: [ZavqFlix](https://zavqflix.vercel.app)

## Xususiyatlar

- 🎬 **12 ta mashhur kino** - Eng yaxshi filmlar
- ▶️ **YouTube trailerlar** - Har bir kino uchun
- 📱 **Mobile responsive** - Barcha qurilmalarda
- ⚡ **Fast loading** - Optimallashtirilgan
- 🎨 **Modern UI** - Netflix kabi dizayn
- 🆓 **Bepul** - Hech qanday to'lov yo'q