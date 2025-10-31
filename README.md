# ZavqFlix

ZavqFlix - bu kino va seriallarni onlayn tomosha qilish uchun mo'ljallangan zamonaviy veb-platforma.

## Xususiyatlar

- 🎬 Kino va seriallar katalogi
- 🔍 Qidiruv va filtrlash
- ❤️ Sevimlilar ro'yxati
- 🎫 Bilet bron qilish tizimi
- 📱 Responsive dizayn
- 🌙 Qorong'u tema

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

2. Client qismini o'rnatish:
```bash
cd client
npm install
```

3. Ishga tushirish:
```bash
npm run dev
```

## Deploy qilish

### Vercel'da deploy qilish:
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
client/
├── public/          # Statik fayllar
├── src/
│   ├── components/  # React komponentlar
│   ├── pages/       # Sahifa komponentlari
│   ├── assets/      # Rasmlar va boshqa resurslar
│   └── ...
└── ...
```

## Hissa qo'shish

1. Fork qiling
2. Feature branch yarating (`git checkout -b feature/AmazingFeature`)
3. O'zgarishlarni commit qiling (`git commit -m 'Add some AmazingFeature'`)
4. Branch ga push qiling (`git push origin feature/AmazingFeature`)
5. Pull Request oching

## Litsenziya

Bu loyiha MIT litsenziyasi ostida tarqatiladi.