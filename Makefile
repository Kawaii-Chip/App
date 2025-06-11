.PHONY : all help dependencies build preview clean

NPM := npm
EXPO := npx expo
PLATFORM := web

O := dist

all: help

help:
	@echo "Build system for Expo web app"
	@echo "Available targets:"
	@echo "  all          - Show this help message"
	@echo "  dependencies - Install project dependencies"
	@echo "  build        - Build the project"
	@echo "  preview      - Start the Expo development server"
	@echo "  clean        - Clean the build output"

dependencies:
	@$(NPM) install

build: dependencies
	@$(EXPO) export --platform $(PLATFORM)

preview:
	@$(EXPO) start --$(PLATFORM)

clean:
	rm -rf $(O)
