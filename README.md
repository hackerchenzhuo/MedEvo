<div align="center">

# MedEvo: Medical Reasoning Evolution<br>through Knowledge Navigation

**Preserve valid reasoning. Repair local failures. Learn from independent feedback.**

[![Paper](https://img.shields.io/badge/Paper-PDF-b31b1b.svg)](docs/assets/medevo.pdf)
[![Website](https://img.shields.io/badge/Website-MedEvo-287db1.svg)](https://pork-pay.github.io/MedEvo/)

Wang Xiaoliang<sup>1,2*</sup>, Zhuo Chen<sup>2*</sup>, Chuanyang Zheng<sup>2</sup>,
Quanbin Wang<sup>2</sup>, Jiangwei Lao<sup>2</sup>, Yingao Liu<sup>2</sup>,
Jiajia Liu<sup>2</sup>, Jinming Cao<sup>2</sup>, Honglin Lin<sup>3,4</sup>,
Zhihong Lu<sup>2</sup>, Hao Jin<sup>1</sup>, Jian Wang<sup>2</sup>, Lijun Wu<sup>3,4†</sup>

<sup>1</sup>Zhejiang University · <sup>2</sup>Ant Group<br>
<sup>3</sup>Shanghai Artificial Intelligence Laboratory · <sup>4</sup>Shanghai Jiao Tong University

<sup>*</sup>Equal contribution · <sup>†</sup>Corresponding author

</div>

## Overview

**MedEvo uses medical knowledge to guide local reasoning repair and subsequent learning.**
An auditor that cannot access the reference answer locates the first consequential error and
provides a minimal, answer-free hint. The same student preserves its valid prefix and regenerates
the suffix. Medical-tag and error-type feedback on a fixed, held-out set guides the next round's
data selection.

Accepted repairs retain the recovery cue and use full-response supervised fine-tuning. Each round
trains from the original base model on the updated dataset.

![Knowledge Navigation in MedEvo](docs/assets/workflow.png)

## Highlights

- **Local repair:** preserve supported reasoning and target the failed operation with medical knowledge.
- **Feedback-driven evolution:** independent feedback directs training toward remaining capability gaps.
- **Gains across scales:** seven-benchmark mean accuracy improves from **65.57% → 69.12%** (9B),
  **67.91% → 73.04%** (35B), and **71.83% → 74.95%** (397B), using SFT alone.

[**Method, results, and analysis → Project website**](https://pork-pay.github.io/MedEvo/)

The paper and project page are available. Training and evaluation code is not yet included.

## Citation

```bibtex
@misc{wang2026medevo,
  title  = {MedEvo: Medical Reasoning Evolution through Knowledge Navigation},
  author = {Wang, Xiaoliang and Chen, Zhuo and Zheng, Chuanyang and Wang, Quanbin
            and Lao, Jiangwei and Liu, Yingao and Liu, Jiajia and Cao, Jinming
            and Lin, Honglin and Lu, Zhihong and Jin, Hao and Wang, Jian and Wu, Lijun},
  year   = {2026},
  url    = {https://github.com/pork-pay/MedEvo}
}
```
