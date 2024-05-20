from setuptools import setup, find_packages

setup(
    name="Flask_Portfolio_2024",
    version="0.1.0",
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        # List your dependencies here
        "Flask",
        "click",
        "blinder",
        "itsdangerous",
        "Jinja2",
        "MarkupSafe",
        "Werkzeug",
        "wheel",
    ],
    entry_points={
        "console_scripts": [
            "run=cli:main",  
        ],
    },
    author="Priyanshu Verma",
    author_email="vpriyanshu671@gmail.com",
    description="A Flask portfolio application for 2024",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    url="https://github.com/vpriyanshu671/Flask_Portfolio_2024",
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: Linux",
    ],
    python_requires='>=3.10.12',
)
