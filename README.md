# Test Repo i2v

This repository contains a DotNet 5 web API project and an Angular 12 application project. This is a test repo for correctly setting up a project with a DotNet API and an Angular application, and basics of both technologies.


## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- .Net 5 SDK
- Node.js and npm
- Angular CLI

You might encounter runtime, compilation and logical error. So you need to fix therm as you go.

## Setting up the DotNet API

1. Open a terminal and navigate to the `Test_DotNet` directory
2. Either run the command `dotnet run` or use Visual Studio to run the API

The API should now be running at `http://localhost:5000/`

## Setting up the Angular application

1. Open a terminal and navigate to the `TestAngular` directory
2. Run the command `npm install` to install the dependencies
3. Run the command `ng serve` to start the Angular application

The application should now be running at `http://localhost:4200/`

## Testing the solution
If you are unable to set up the angular application, you can use the tools like postman or curl to test the API.

1. Open a browser and navigate to `http://localhost:4200/`, the Angular application should be displayed, Navigate to `Hash` tab.
2. Enter your `first name` in the input field on the Angular application
3. Click the `Generate Hash` button. If the dotnet API is running correctly, and the logic is correct, the hash value should be displayed below the button.
4. Ex: If you enter `archit` in the input field, the hash value should be `92A1B1799146E7EBE480694175806E3A01755A84D9F316B807D7D9C6280FE6B8` for the name `John` as per the correct logic to be.
5. The hash value for the name should be displayed below the button. Copy the hash value.

### Paste the hash value Here in the readme file: 
1. The Hash for `archit` is `92a1b1799146e7ebe480694175806e3a01755a84d9f316b807d7d9c6280fe6b8`
2. The Hash for `Tanisht` is `ed50f524dc872b10c7dd89bdbf0cd111e43ce654e268b37274583f4617be03a3`

## Troubleshooting

If you run into issues while setting up the solution, try the following:

- Make sure you have the latest versions of .Net 5 SDK, Node.js, and npm installed, appropriate Angular version.
- Check that the API is running and accessible at `http://localhost:5000/`
- If you get a CORS error, make sure that the correct origins are allowed in the API

