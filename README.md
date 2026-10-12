<img src="docs/assets/logos/medevo.svg" height="54" alt="MedEvo">

# MedEvo: Medical Reasoning Evolution<br>through Knowledge Navigation

[Paper](https://pork-pay.github.io/MedEvo/assets/medevo.pdf) · [Project page](https://pork-pay.github.io/MedEvo/) · [GitHub](https://github.com/pork-pay/MedEvo)

[Xiaoliang Wang](https://openreview.net/profile?id=~Wang_Xiaoliang2)<sup>1,2*</sup>,
[Zhuo Chen](https://openreview.net/profile?id=~Zhuo_Chen3)<sup>2*</sup>,
[Chuanyang Zheng](https://openreview.net/profile?id=~Chuanyang_Zheng2)<sup>2</sup>,
[Quanbin Wang](https://openreview.net/profile?id=~Quanbin_Wang1)<sup>2</sup>,
[Jiangwei Lao](https://openreview.net/profile?id=~Jiangwei_Lao1)<sup>2</sup>,
[Yingao Liu](https://openreview.net/profile?id=~Yingao_Liu1)<sup>2</sup>,
[Jiajia Liu](https://openreview.net/profile?id=~Jiajia_Liu1)<sup>2</sup>,
[Jinming Cao](https://openreview.net/profile?id=~Jinming_Cao1)<sup>2</sup>,
[Honglin Lin](https://openreview.net/profile?id=~Honglin_Lin2)<sup>3,4</sup>,
[Zhihong Lu](https://openreview.net/profile?id=~Zhihong_Lu2)<sup>2</sup>,
[Hao Jin](https://openreview.net/profile?id=~Hao_Jin4)<sup>1</sup>,
[Jian Wang](https://openreview.net/profile?id=~Jian_Wang25)<sup>2</sup>,
[Lijun Wu](https://openreview.net/profile?id=~Lijun_Wu1)<sup>3,4†</sup>

<a href="https://www.zju.edu.cn/"><img src="docs/assets/logos/zhejiang-university-symbol.png" height="30" alt="Zhejiang University"></a> <sup>1</sup>Zhejiang University ·
<a href="https://www.antgroup.com/"><img src="docs/assets/logos/ant-group-symbol.png" height="30" alt="Ant Group"></a> <sup>2</sup>Ant Group ·
<a href="https://www.shlab.org.cn/"><img src="docs/assets/logos/shanghai-ai-lab-symbol.png" height="30" alt="Shanghai Artificial Intelligence Laboratory"></a> <sup>3</sup>Shanghai Artificial Intelligence Laboratory ·
<a href="https://www.sjtu.edu.cn/"><img src="docs/assets/logos/shanghai-jiao-tong-symbol.png" height="30" alt="Shanghai Jiao Tong University"></a> <sup>4</sup>Shanghai Jiao Tong University

<sup>*</sup>Equal contribution · <sup>†</sup>Corresponding author

## Watch Knowledge Navigation

[![Knowledge Navigation: preserve a supported prefix, repair the suffix, update the dataset, and let independent feedback redirect the next questions.](docs/assets/knowledge-navigation.gif)](https://pork-pay.github.io/MedEvo/#method)

**Medical knowledge repairs a failed trace; independent feedback decides what the student learns next.**

A gold-blind auditor supplies an answer-free hint. The same student preserves its supported prefix and regenerates the suffix. Screened targets update the dataset; each SFT round starts from the **same base model**. Held-out feedback guides the next training questions.

[**Play the animated explanation →**](https://pork-pay.github.io/MedEvo/#method)

## Two observations

- **Repair success is not learning value.** Longest-8k questions have lower repair success than random-8k questions (55.70% versus 67.50%), but yield higher downstream accuracy (66.78% versus 64.35%). This comparison does not separate trace length from difficulty.
- **The feedback source matters.** Training-error feedback ends at 64.01% benchmark accuracy; independent fixed-set feedback reaches 69.12%. Both start from 65.57% on Qwen3.5-9B.

[Evidence and original figure →](https://pork-pay.github.io/MedEvo/#evidence)

## Results

Unweighted mean accuracy across seven medical multimodal benchmarks, using SFT alone:

| Backbone | Base (%) | MedEvo (%) | Rounds |
|:--|--:|--:|--:|
| Qwen3.5-9B | 65.57 | **69.12** | 3 |
| Qwen3.5-35B | 67.91 | **73.04** | 3 |
| Qwen3.5-397B | 71.83 | **74.95** | 2 |

[Complete 21-model comparison and benchmark scores →](https://pork-pay.github.io/MedEvo/#comparison)

Full settings, benchmark-level results, and ablations are in the [paper](https://pork-pay.github.io/MedEvo/assets/medevo.pdf).

## Resources

This repository hosts the paper and project page. **Implementation and training-data files are not released.**

[Related project: ECG-RSI](https://pork-pay.github.io/ECG-RSI/) studies measurable ECG waveform supervision and feedback-guided intervention selection.

To preview the static page locally, run `python3 -m http.server 8000 --directory docs` and open <http://localhost:8000/>.

## Citation

```bibtex
@misc{wang2026medevo,
  title  = {MedEvo: Medical Reasoning Evolution through Knowledge Navigation},
  author = {Wang, Xiaoliang and Chen, Zhuo and Zheng, Chuanyang and
            Wang, Quanbin and Lao, Jiangwei and Liu, Yingao and Liu, Jiajia and
            Cao, Jinming and Lin, Honglin and Lu, Zhihong and Jin, Hao and
            Wang, Jian and Wu, Lijun},
  year   = {2026},
  url    = {https://pork-pay.github.io/MedEvo/}
}
```
