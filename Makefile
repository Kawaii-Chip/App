.PHONY : all help setup build preview clean

NPM := npm
EXPO := npx expo
PLATFORM := android

all: help

help:
	@echo "Makefile for building the project"
	@echo "Available targets:"
	@echo "  help     - Show this help message"
	@echo "  setup    - Install dependencies"
	@echo "  build    - Build the project for $(PLATFORM)"
	@echo "  preview  - Run app via Expo app"
	@echo "  clean    - Clean the output directory"

setup:
	@$(NPM) install

build: setup
	@$(EXPO) export --platform $(PLATFORM)

preview:
	@$(EXPO) start --platform $(PLATFORM)

OUTPUT_DIR := dist

clean:
	@rm -rf $(OUTPUT_DIR)
