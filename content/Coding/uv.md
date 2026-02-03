---
created:
  - " 01-06-2026 20:45"
tags:
  - Resource
---


[Getting Started](https://docs.astral.sh/uv/getting-started/)
#### Installation
- https://docs.astral.sh/uv/getting-started/installation/#standalone-installer
#### Usage
##### Projects
```
- `uv init`: Create a new Python project.
- `uv add`: Add a dependency to the project.
- `uv remove`: Remove a dependency from the project.
- `uv sync`: Sync the project's dependencies with the environment.
- `uv lock`: Create a lockfile for the project's dependencies.
- `uv run`: Run a command in the project environment.
- `uv tree`: View the dependency tree for the project.
- `uv build`: Build the project into distribution archives.
- `uv publish`: Publish the project to a package index.
```
##### Manual
```
- `uv venv`: Create a new virtual environment.
  
Replaces pip
- `uv pip install`: Install packages into the current environment.
- `uv pip show`: Show details about an installed package.
- `uv pip freeze`: List installed packages and their versions.
- `uv pip check`: Check that the current environment has compatible packages.
- `uv pip list`: List installed packages.
- `uv pip uninstall`: Uninstall packages.
- `uv pip tree`: View the dependency tree for the environment.
  
```