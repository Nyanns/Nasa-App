Berikut adalah contoh **README** yang lebih terperinci dan sesuai dengan proyek yang telah Anda buat:

---

# NASA APOD React App

A simple React app that fetches the Astronomy Picture of the Day (APOD) from NASA's API, displays the image, and allows the user to view it in a modal. The app includes a random date feature, where the API is queried for a random date between 1995 and today.

## Features

- 🚀 Fetches the Astronomy Picture of the Day (APOD) from NASA API.
- 🖼️ Displays the image from the APOD API on the main page.
- 💬 Allows the user to toggle a sidebar modal to view more details about the image.
- 📅 Randomly selects a date between 1995 and the current date to query the API.
- ⏳ Displays a loading spinner while fetching data from the API.

## 🎯 Demo

Check out the live demo [here](https://nasaviewnyanns.netlify.app/)!

![Game](https://github.com/Nyanns/Nasa-App/blob/main/Recording2024-12-17.mp4)

---

## Technologies Used

- ⚛️ **React**: For building the user interface.
- 🎞️ **Framer Motion**: For animations (Sidebar transition).
- 🎨 **FontAwesome**: For loading spinner icon.
- 🌌 **NASA API**: To fetch the Astronomy Picture of the Day (APOD).

## Installation

To run this app locally, follow the steps below:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/nasa-apod-react-app.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd nasa-apod-react-app
   ```

3. **Install the dependencies**:

   ```bash
   npm install
   ```

4. **Set up environment variables**:

   - Create a `.env` file in the root of the project and add your NASA API key:
     ```bash
     VITE_NASA_API_KEY=your_api_key_here
     ```

5. **Start the development server**:

   ```bash
   npm start
   ```

6. **Visit the app**:

   The app will open in your browser at `http://localhost:3000`.

## Usage

- Upon loading, the app fetches data from NASA's API based on a random date.
- A loading spinner will be displayed while the data is being fetched.
- Once the data is fetched, the main image and additional information are displayed.
- You can toggle the sidebar to view more details about the image.
- The image and data will change each time the page is reloaded due to the random date fetching logic.

## License

This project is licensed under the [MIT License](LICENSE).

---

Pastikan untuk mengganti bagian **Installation** dan **API key** dengan informasi yang sesuai dengan kebutuhan Anda. Anda bisa menambahkan instruksi lebih lanjut di bagian **Usage** sesuai dengan fitur tambahan yang Anda implementasikan.
