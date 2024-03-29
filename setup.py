import os

from setuptools import setup
from setuptools import find_packages

here = os.path.abspath(os.path.dirname(__file__))
README = open(os.path.join(here, 'README.rst')).read()
CHANGES = open(os.path.join(here, 'CHANGES.txt')).read()

requires = open('requirements.txt').read().split('\n')

setup(name='pyvore',
      version='0.0',
      description='pyvore',
      long_description=README + '\n\n' +  CHANGES,
      classifiers=[
        "Programming Language :: Python",
        "Framework :: Pylons",
        "Topic :: Internet :: WWW/HTTP",
        "Topic :: Internet :: WWW/HTTP :: WSGI :: Application",
        ],
      author='abourget/sontek',
      author_email='',
      url='',
      keywords='web wsgi bfg pylons pyramid',
      packages=find_packages(),
      include_package_data=True,
      zip_safe=False,
      test_suite='pyvore',
      install_requires=requires,
      entry_points="""\
      [paste.app_factory]
      main = pyvore:main
      [console_scripts]
      populate_pyvore = pyvore.scripts.populate:main
      """,
      )

