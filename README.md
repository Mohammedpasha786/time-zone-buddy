# time-zone-buddy
# 🌍 Time Zone Meeting Scheduler

A modern, responsive web-based tool that helps users from different time zones find suitable meeting times. The application calculates overlapping availability windows and provides smart recommendations for optimal meeting scheduling.

![Time Zone Meeting Scheduler](https://img.shields.io/badge/Status-Ready%20to%20Use-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### Core Functionality
- **Multi-timezone Support**: Add unlimited locations (cities or countries)
- **Smart Availability Calculation**: Finds overlapping 9 AM - 8 PM windows across all time zones
- **Time Zone Detection**: Automatic timezone recognition for 50+ major cities and countries
- **Intelligent Grouping**: Groups consecutive available hours into meeting blocks
- **Best Time Recommendations**: Highlights the optimal meeting window

### User Experience
- **Modern UI Design**: Beautiful gradient interface with glassmorphism effects
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging hover effects and loading states
- **Error Handling**: Clear validation messages and helpful suggestions
- **Real-time Results**: Instant calculation and display of meeting times

## 🚀 Quick Start

### Option 1: Direct Usage
1. Download the `index.html` file
2. Open it in any modern web browser
3. Start finding meeting times immediately!

### Option 2: GitHub Pages
1. Fork this repository
2. Enable GitHub Pages in repository settings
3. Access your hosted version at `https://yourusername.github.io/timezone-meeting-scheduler`

## 📖 How to Use

1. **Enter Locations**: Add 2 or more cities or countries in the input fields
   - Examples: "New York", "London", "Tokyo", "Mumbai", "Sydney"
   - Country names also work: "USA", "UK", "Germany", "Japan"

2. **Add More Locations**: Click "Add Another Location" to include additional participants

3. **Calculate Meeting Times**: Click "Find Meeting Times" to discover overlapping availability

4. **Review Results**: 
   - See all available time windows
   - Each option shows the duration and local times for all participants
   - The recommended best option is highlighted separately

5. **Schedule Your Meeting**: Use the suggested times to coordinate with all participants

## 🌐 Supported Locations

### Major Cities
- **North America**: New York, Los Angeles, Chicago, Toronto, Vancouver, Mexico City
- **Europe**: London, Paris, Berlin, Madrid, Rome, Amsterdam, Zurich, Stockholm, Moscow
- **Asia**: Tokyo, Singapore, Hong Kong, Seoul, Beijing, Shanghai, Mumbai, Delhi, Bangalore, Dubai
- **Oceania**: Sydney, Melbourne, Auckland

### Countries
- USA, Canada, UK, Germany, France, Japan, China, India, Australia, Singapore

## 💻 Technical Details

### Technology Stack
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with modern design patterns
- **No Dependencies**: Works without any external libraries or frameworks
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)

### Key Algorithms
- **Timezone Conversion**: Handles UTC offset calculations and daylight saving time
- **Overlap Detection**: Finds common availability windows across multiple time zones
- **Time Grouping**: Intelligently groups consecutive hours into meeting blocks
- **Edge Case Handling**: Manages midnight crossovers and timezone boundaries

### Performance Features
- **Lightweight**: Entire application is under 20KB
- **Fast Loading**: No external dependencies to download
- **Responsive**: Smooth performance on all device types
- **Memory Efficient**: Uses in-memory storage for session data

## 🎨 Design Features

- **Modern Gradient Background**: Eye-catching purple-blue gradient
- **Glassmorphism Effects**: Semi-transparent containers with backdrop filters
- **Smooth Animations**: Hover effects and loading states
- **Intuitive Icons**: Clear visual indicators for different actions
- **Color-coded Results**: Green for available times, orange for warnings, red for errors

## 🔧 Customization

### Adding New Cities
To add support for additional cities, modify the `cityTimezones` object in the JavaScript section:

```javascript
const cityTimezones = {
    'your city': 'Timezone/Identifier',
    // ... existing cities
};
```

### Changing Availability Hours
To modify the default 9 AM - 8 PM availability window, update the constants in the `findOverlappingTimes` function:

```javascript
const startUTC = (9 - offset + 24) % 24;  // Change 9 to your start hour
const endUTC = (20 - offset + 24) % 24;  // Change 20 to your end hour
```

### Styling Modifications
All styles are contained in the `<style>` section. Key CSS custom properties can be modified:
- Primary colors: `#667eea`, `#764ba2`
- Success color: `#48bb78`
- Error color: `#e53e3e`
- Background gradients and border radius values

## 🐛 Troubleshooting

### Common Issues

**"Could not find timezone" Error**
- Ensure you're using major city names or supported countries
- Try alternative spellings (e.g., "NYC" → "New York")
- Check the supported locations list above

**No Overlapping Times Found**
- This means participants have no common 9 AM - 8 PM windows
- Consider extending availability hours
- Try scheduling across multiple days
- Check if time zones are too far apart (e.g., Australia + US East Coast)

**Mobile Display Issues**
- Ensure you're using a modern mobile browser
- The app is responsive but requires JavaScript enabled
- Try refreshing the page if results don't display properly

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Here are ways you can help:

1. **Add New Cities**: Expand the timezone database
2. **Improve UI/UX**: Enhance the design or add new features
3. **Bug Reports**: Submit issues you encounter
4. **Feature Requests**: Suggest new functionality
5. **Documentation**: Improve this README or add code comments

### Development Setup
1. Fork the repository
2. Make your changes to `index.html`
3. Test in multiple browsers
4. Submit a pull request with a clear description

