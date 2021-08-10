# Demo: https://passerellesnumeriques.herokuapp.com/
# Steps to run the app
    1. Clone branch master
    2. Copy file .env.example sang .env (cp .env.example .env)
    3. Create database with name "pnv-landing-page"
    4. Run:
        - composer update
        - npm i
        - php artisan migrate --seed
        - php artisan key:generate
        - php artisan serve
        - npm run watch
    5. Open the following URL on your browser on: http://127.0.0.1:8000
## Note: Start apache, MySQL in Xampp
## account in file UserSeeder